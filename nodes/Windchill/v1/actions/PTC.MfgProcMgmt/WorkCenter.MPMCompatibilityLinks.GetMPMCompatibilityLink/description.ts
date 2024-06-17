import { INodeProperties } from "n8n-workflow";

export const WorkCenterMpmCompatibilityLinksGetMpmCompatibilityLinkDescription: INodeProperties[] = [
	{
		displayName: 'WorkCenterId',
		name: 'WorkCenterId-string(path)',
		description: 'Work Center ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'MPMCompatibilityLinkId',
		name: 'MPMCompatibilityLinkId-string(path)',
		description: 'Mpm Compatibility Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/MPMCompatibilityLinks('{MPMCompatibilityLinkId}')",
				],
			},
		},
	},
];
