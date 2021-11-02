/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ApolloClient, MutationOptions, SubscriptionOptions, WatchQueryOptions } from "@apollo/client/core";
import { ConsumerRenderer } from "./utils";
import { DocumentNode } from "graphql";
import { MutationFn, MutationRenderer, QueryRenderer, QueryResult, SubscriptionRenderer } from "./utils/types";
export namespace Components {
    interface ApolloConsumer {
        "client": ApolloClient<any>;
        "renderer": ConsumerRenderer;
    }
    interface ApolloMutation {
        "client": ApolloClient<any>;
        "mutation": DocumentNode;
        "options": MutationOptions;
        "renderer": MutationRenderer;
        "variables": any;
    }
    interface ApolloProvider {
        "client": ApolloClient<any>;
    }
    interface ApolloQuery {
        "client": ApolloClient<any>;
        "options": WatchQueryOptions;
        "query": DocumentNode;
        "renderer": QueryRenderer<any>;
        "variables": any;
    }
    interface ApolloSubscription {
        "client": ApolloClient<any>;
        "options": SubscriptionOptions;
        "renderer": SubscriptionRenderer<any>;
        "subscription": DocumentNode;
        "variables": any;
    }
}
declare global {
    interface HTMLApolloConsumerElement extends Components.ApolloConsumer, HTMLStencilElement {
    }
    var HTMLApolloConsumerElement: {
        prototype: HTMLApolloConsumerElement;
        new (): HTMLApolloConsumerElement;
    };
    interface HTMLApolloMutationElement extends Components.ApolloMutation, HTMLStencilElement {
    }
    var HTMLApolloMutationElement: {
        prototype: HTMLApolloMutationElement;
        new (): HTMLApolloMutationElement;
    };
    interface HTMLApolloProviderElement extends Components.ApolloProvider, HTMLStencilElement {
    }
    var HTMLApolloProviderElement: {
        prototype: HTMLApolloProviderElement;
        new (): HTMLApolloProviderElement;
    };
    interface HTMLApolloQueryElement extends Components.ApolloQuery, HTMLStencilElement {
    }
    var HTMLApolloQueryElement: {
        prototype: HTMLApolloQueryElement;
        new (): HTMLApolloQueryElement;
    };
    interface HTMLApolloSubscriptionElement extends Components.ApolloSubscription, HTMLStencilElement {
    }
    var HTMLApolloSubscriptionElement: {
        prototype: HTMLApolloSubscriptionElement;
        new (): HTMLApolloSubscriptionElement;
    };
    interface HTMLElementTagNameMap {
        "apollo-consumer": HTMLApolloConsumerElement;
        "apollo-mutation": HTMLApolloMutationElement;
        "apollo-provider": HTMLApolloProviderElement;
        "apollo-query": HTMLApolloQueryElement;
        "apollo-subscription": HTMLApolloSubscriptionElement;
    }
}
declare namespace LocalJSX {
    interface ApolloConsumer {
        "client"?: ApolloClient<any>;
        "renderer"?: ConsumerRenderer;
    }
    interface ApolloMutation {
        "client"?: ApolloClient<any>;
        "mutation"?: DocumentNode;
        "onReady"?: (event: CustomEvent<MutationFn<any, any>>) => void;
        "options"?: MutationOptions;
        "renderer"?: MutationRenderer;
        "variables"?: any;
    }
    interface ApolloProvider {
        "client"?: ApolloClient<any>;
    }
    interface ApolloQuery {
        "client"?: ApolloClient<any>;
        "onReady"?: (event: CustomEvent<QueryResult<any>>) => void;
        "onResult"?: (event: CustomEvent<QueryResult<any>>) => void;
        "options"?: WatchQueryOptions;
        "query"?: DocumentNode;
        "renderer"?: QueryRenderer<any>;
        "variables"?: any;
    }
    interface ApolloSubscription {
        "client"?: ApolloClient<any>;
        "onReady"?: (event: CustomEvent<any>) => void;
        "onResult"?: (event: CustomEvent<any>) => void;
        "options"?: SubscriptionOptions;
        "renderer"?: SubscriptionRenderer<any>;
        "subscription"?: DocumentNode;
        "variables"?: any;
    }
    interface IntrinsicElements {
        "apollo-consumer": ApolloConsumer;
        "apollo-mutation": ApolloMutation;
        "apollo-provider": ApolloProvider;
        "apollo-query": ApolloQuery;
        "apollo-subscription": ApolloSubscription;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "apollo-consumer": LocalJSX.ApolloConsumer & JSXBase.HTMLAttributes<HTMLApolloConsumerElement>;
            "apollo-mutation": LocalJSX.ApolloMutation & JSXBase.HTMLAttributes<HTMLApolloMutationElement>;
            "apollo-provider": LocalJSX.ApolloProvider & JSXBase.HTMLAttributes<HTMLApolloProviderElement>;
            "apollo-query": LocalJSX.ApolloQuery & JSXBase.HTMLAttributes<HTMLApolloQueryElement>;
            "apollo-subscription": LocalJSX.ApolloSubscription & JSXBase.HTMLAttributes<HTMLApolloSubscriptionElement>;
        }
    }
}
