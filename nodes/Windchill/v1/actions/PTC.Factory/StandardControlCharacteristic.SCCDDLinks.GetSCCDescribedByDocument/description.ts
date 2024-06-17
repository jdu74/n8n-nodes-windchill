import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccddLinksGetSccDescribedByDocumentDescription: INodeProperties[] = [
	{
		displayName: 'StandardControlCharacteristicId',
		name: 'StandardControlCharacteristicId-string(path)',
		description: 'Standard Control Characteristic ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SCCDescribedByDocumentId',
		name: 'SCCDescribedByDocumentId-string(path)',
		description: 'Scc Described By Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
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
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				],
			},
		},
	},
];
