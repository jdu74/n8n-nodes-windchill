import { INodeProperties } from "n8n-workflow";

export const DeleteEventSubscriptionDescription: INodeProperties[] = [
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
					"DELETE /EventSubscriptions('{EventSubscriptionId}')",
				],
			},
		},
		required: true,
	},
];
