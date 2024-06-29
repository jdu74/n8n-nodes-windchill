import { INodeProperties } from "n8n-workflow";

export const BurstConfigurationReferenceLinksGetDynamicDocumentReferenceDescription: INodeProperties[] = [
	{
		displayName: 'BurstConfigurationId',
		name: 'BurstConfigurationId-string(path)',
		description: 'Burst Configuration ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DynamicDocumentReferenceId',
		name: 'DynamicDocumentReferenceId-string(path)',
		description: 'Dynamic Document Reference ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
	},
];
