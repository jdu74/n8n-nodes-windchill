import { INodeProperties } from "n8n-workflow";

export const SequenceHolderDocumentDescribeLinksGetDocumentDescribeLinkDescription: INodeProperties[] = [
	{
		displayName: 'SequenceHolderId',
		name: 'SequenceHolderId-string(path)',
		description: 'Sequence Holder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DocumentDescribeLinkId',
		name: 'DocumentDescribeLinkId-string(path)',
		description: 'Document Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
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
					"GET /SequenceHolders('{SequenceHolderId}')/DocumentDescribeLinks('{DocumentDescribeLinkId}')",
				],
			},
		},
	},
];
