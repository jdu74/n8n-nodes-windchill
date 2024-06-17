import { INodeProperties } from "n8n-workflow";

export const DocumentDocUsageLinksGetDocumentUsageLinkDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					"GET /Documents('{DocumentId}')/DocUsageLinks('{DocumentUsageLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DocumentUsageLinkId',
		name: 'DocumentUsageLinkId-string(path)',
		description: 'Document Usage Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					"GET /Documents('{DocumentId}')/DocUsageLinks('{DocumentUsageLinkId}')",
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
					'PTC.DocMgmt',
				],
				operation: [
					"GET /Documents('{DocumentId}')/DocUsageLinks('{DocumentUsageLinkId}')",
				],
			},
		},
	},
];
