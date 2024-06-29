import { INodeProperties } from "n8n-workflow";

export const GetAllAverageProblemReportCompletionTimeDescription: INodeProperties[] = [
	{
		displayName: 'AllAverageProblemReportCompletionTimeId',
		name: 'AllAverageProblemReportCompletionTimeId-string(path)',
		description: 'All Average Problem Report Completion Time ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /AllAverageProblemReportCompletionTimes('{AllAverageProblemReportCompletionTimeId}')",
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
					"GET /AllAverageProblemReportCompletionTimes('{AllAverageProblemReportCompletionTimeId}')",
				],
			},
		},
	},
];
