import { INodeProperties } from "n8n-workflow";

export const GetLegacyReportDeliverablesEppDescription: INodeProperties[] = [
	{
		displayName: 'LegacyReportDeliverablesEppId',
		name: 'LegacyReportDeliverablesEppId-string(path)',
		description: 'Legacy Report Deliverables Epp ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /LegacyReportDeliverablesEpps('{LegacyReportDeliverablesEppId}')",
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
					"GET /LegacyReportDeliverablesEpps('{LegacyReportDeliverablesEppId}')",
				],
			},
		},
	},
];
