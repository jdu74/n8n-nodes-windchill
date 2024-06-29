import * as DeleteEventSubscription from './DeleteEventSubscription';
import * as EventSubscriptionSubscribedEventGetEvent from './EventSubscription.SubscribedEvent.GetEvent';
import * as FunctionGetApplicableEventsWith from './Function_GetApplicableEvents_With';
import * as GetEntityEventSubscriptions from './GetEntityEventSubscriptions';
import * as GetEntityTypeInContainerEventSubscriptions from './GetEntityTypeInContainerEventSubscriptions';
import * as GetEntityTypeInFolderEventSubscriptions from './GetEntityTypeInFolderEventSubscriptions';
import * as GetEvent from './GetEvent';
import * as GetEvents from './GetEvents';
import * as GetEventSubscription from './GetEventSubscription';
import * as GetEventSubscriptions from './GetEventSubscriptions';

import { INodeProperties } from 'n8n-workflow';

export {
	DeleteEventSubscription,
	EventSubscriptionSubscribedEventGetEvent,
	FunctionGetApplicableEventsWith,
	GetEntityEventSubscriptions,
	GetEntityTypeInContainerEventSubscriptions,
	GetEntityTypeInFolderEventSubscriptions,
	GetEvent,
	GetEvents,
	GetEventSubscription,
	GetEventSubscriptions,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/EventMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
			},
		},
		default: 'GET /EventSubscriptions',
		options: [
			{
				name: 'DeleteEventSubscription',
				value: "DELETE /EventSubscriptions('{EventSubscriptionId}')",
				description: "DeleteEventSubscription - delete /EventSubscriptions('{EventSubscriptionId}')",
				action: 'DeleteEventSubscription',
			},
			{
				name: 'EventSubscription.SubscribedEvent.GetEvent',
				value: "GET /EventSubscriptions('{EventSubscriptionId}')/SubscribedEvent",
				description: "Get Event - get /EventSubscriptions('{EventSubscriptionId}')/SubscribedEvent",
				action: 'EventSubscription.SubscribedEvent.GetEvent',
			},
			{
				name: 'Function_GetApplicableEvents_With',
				value: "GET /GetApplicableEvents(EntityName='{EntityName}')",
				description: "Function to get a list of all events for a given entity type. - get /GetApplicableEvents(EntityName='{EntityName}')",
				action: 'Function_GetApplicableEvents_With',
			},
			{
				name: 'GetEntityEventSubscriptions',
				value: 'GET /EventSubscriptions/PTC.EventMgmt.EntityEventSubscription',
				description: 'Get EventSubscriptions of type EntityEventSubscription - get /EventSubscriptions/PTC.EventMgmt.EntityEventSubscription',
				action: 'GetEntityEventSubscriptions',
			},
			{
				name: 'GetEntityTypeInContainerEventSubscriptions',
				value: 'GET /EventSubscriptions/PTC.EventMgmt.EntityTypeInContainerEventSubscription',
				description: 'Get EventSubscriptions of type EntityTypeInContainerEventSubscription - get /EventSubscriptions/PTC.EventMgmt.EntityTypeInContainerEventSubscription',
				action: 'GetEntityTypeInContainerEventSubscriptions',
			},
			{
				name: 'GetEntityTypeInFolderEventSubscriptions',
				value: 'GET /EventSubscriptions/PTC.EventMgmt.EntityTypeInFolderEventSubscription',
				description: 'Get EventSubscriptions of type EntityTypeInFolderEventSubscription - get /EventSubscriptions/PTC.EventMgmt.EntityTypeInFolderEventSubscription',
				action: 'GetEntityTypeInFolderEventSubscriptions',
			},
			{
				name: 'GetEvent',
				value: "GET /Events('{EventId}')",
				description: "Get Event for a given EventId - get /Events('{EventId}')",
				action: 'GetEvent',
			},
			{
				name: 'GetEvents',
				value: 'GET /Events',
				description: 'Get Events - get /Events',
				action: 'GetEvents',
			},
			{
				name: 'GetEventSubscription',
				value: "GET /EventSubscriptions('{EventSubscriptionId}')",
				description: "Get EventSubscription for a given EventSubscriptionId - get /EventSubscriptions('{EventSubscriptionId}')",
				action: 'GetEventSubscription',
			},
			{
				name: 'GetEventSubscriptions',
				value: 'GET /EventSubscriptions',
				description: 'Get EventSubscriptions - get /EventSubscriptions',
				action: 'GetEventSubscriptions',
			},
		],
	},
	...DeleteEventSubscription.description,
	...EventSubscriptionSubscribedEventGetEvent.description,
	...FunctionGetApplicableEventsWith.description,
	...GetEntityEventSubscriptions.description,
	...GetEntityTypeInContainerEventSubscriptions.description,
	...GetEntityTypeInFolderEventSubscriptions.description,
	...GetEvent.description,
	...GetEvents.description,
	...GetEventSubscription.description,
	...GetEventSubscriptions.description,
];
