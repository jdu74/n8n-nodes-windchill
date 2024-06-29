import { INodeProperties } from "n8n-workflow";

export const FunctionGetApplicableEventsWithDescription: INodeProperties[] = [
	{
		displayName: 'EntityName',
		name: 'EntityName-string(path)',
		description: 'Entity Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
				operation: [
					"GET /GetApplicableEvents(EntityName='{EntityName}')",
				],
			},
		},
		required: true,
	},
];
