import { INodeProperties } from "n8n-workflow";

export const EventSubscriptionSubscribedEventGetEventDescription: INodeProperties[] = [
	{
		displayName: 'EventSubscriptionId',
		name: 'EventSubscriptionId-string(path)',
		description: 'Event Subscription ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
				operation: [
					"GET /EventSubscriptions('{EventSubscriptionId}')/SubscribedEvent",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
				operation: [
					"GET /EventSubscriptions('{EventSubscriptionId}')/SubscribedEvent",
				],
			},
		},
	},
];
