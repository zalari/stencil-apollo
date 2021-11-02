import { Component, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';
import { DocumentNode } from 'graphql';
import { QueryRenderer, QueryResult } from '../../utils/types';
import { ApolloClient, ApolloQueryResult, ObservableQuery, WatchQueryOptions } from '@apollo/client/core';
import { ApolloProviderConsumer } from '../../utils/apollo-client-state';

@Component({
  tag: 'apollo-query',
})
export class ApolloQueryComponent {
  @Prop() query: DocumentNode;
  @Prop() renderer: QueryRenderer<any>;
  @Prop() variables: any;
  @Prop() options: WatchQueryOptions;
  @State() originalResult: ApolloQueryResult<any>;
  observable: ObservableQuery<any, any>;
  @State() error: Error;
  @Prop() client: ApolloClient<any>;
  @Element() el: HTMLApolloQueryElement;
  @Event({ eventName: 'ready' }) readyEventEmitter: EventEmitter<QueryResult<any>>;
  @Event({ eventName: 'result' }) resultEventEmitter: EventEmitter<QueryResult<any>>;
  private _subscription: ZenObservable.Subscription;

  // without this client not getting injected
  connectedCallback() {
  }

  componentWillLoad() {
    this.startSubscription();
  }

  @Watch('client')
  @Watch('query')
  @Watch('variables')
  @Watch('renderer')
  @Watch('options')
  onPropsChange() {
    this.stopSubscription();
    this.startSubscription();
  }

  disconnectedCallback() {
    this.stopSubscription();
  }

  getResult(): QueryResult {
    return {
      data: this.originalResult?.data,
      loading: this.originalResult ? this.originalResult.loading : true,
      error: {
        clientErrors: this.originalResult?.data?.clientErrors,
        graphQLErrors: this.originalResult?.errors,
        networkError: undefined,
        message: this.originalResult?.errors[0]?.message,
        name: this.originalResult?.errors[0]?.name,
        extraInfo: this.originalResult?.errors[0]?.originalError,
      },
      variables: this.variables,
      networkStatus: this.originalResult?.networkStatus,
      refetch: this.observable?.refetch.bind(this.observable),
      fetchMore: this.observable?.fetchMore.bind(this.observable),
      startPolling: this.observable?.startPolling.bind(this.observable),
      stopPolling: this.observable?.stopPolling.bind(this.observable),
      subscribeToMore: this.observable?.subscribeToMore.bind(this.observable),
      updateQuery: this.observable?.updateQuery.bind(this.observable),
      client: this.client,
    };
  }

  startSubscription() {
    if (this.client) {
      this.observable = this.client.watchQuery({
        query: this.query,
        variables: this.variables,
        ...this.options,
      });
      this._subscription = this.observable.subscribe(originalResult => {
        this.originalResult = originalResult;
        this.resultEventEmitter.emit(this.getResult());
      }, error => {
        this.error = error;
        this.resultEventEmitter.emit(this.getResult());
      });
      this.readyEventEmitter.emit(this.getResult());
    } else {
      throw new Error('You should wrap your parent component with apollo-provider custom element or ApolloProvider functional component');
    }
  }

  stopSubscription() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  render() {
    return this.renderer && this.renderer(this.getResult());
  }
}

ApolloProviderConsumer.injectProps(ApolloQueryComponent, ['client']);
