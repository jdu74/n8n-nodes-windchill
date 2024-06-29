import { INodeProperties } from "n8n-workflow";

export const GetWorkflowLctHistoryDescription: INodeProperties[] = [
	{
		displayName: 'WorkflowLCTHistoryId',
		name: 'WorkflowLCTHistoryId-string(path)',
		description: 'Workflow Lct History ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /WorkflowLCTHistorys('{WorkflowLCTHistoryId}')",
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
					'PTC.Reporting',
				],
				operation: [
					"GET /WorkflowLCTHistorys('{WorkflowLCTHistoryId}')",
				],
			},
		},
	},
];
