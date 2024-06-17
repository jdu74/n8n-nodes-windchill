import { INodeProperties } from "n8n-workflow";

export const ProblemReportAffectsLinksGetAffectsLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ProblemReportId',
		name: 'ProblemReportId-string(path)',
		description: 'Problem Report ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ProblemReports('{ProblemReportId}')/AffectsLinks('{AffectsLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AffectsLinkItemId',
		name: 'AffectsLinkItemId-string(path)',
		description: 'Affects Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ProblemReports('{ProblemReportId}')/AffectsLinks('{AffectsLinkItemId}')",
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
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ProblemReports('{ProblemReportId}')/AffectsLinks('{AffectsLinkItemId}')",
				],
			},
		},
	},
];
