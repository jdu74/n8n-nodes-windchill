import { INodeProperties } from "n8n-workflow";

export const OptionSetVersionsGetOptionSetDescription: INodeProperties[] = [
	{
		displayName: 'OptionSetId',
		name: 'OptionSetId-string(path)',
		description: 'Option Set ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /OptionSets('{OptionSetId}')/Versions('{VersionsId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'VersionsId',
		name: 'VersionsId-string(path)',
		description: 'Versions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /OptionSets('{OptionSetId}')/Versions('{VersionsId}')",
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
					'PTC.ProdPlatformMgmt',
				],
				operation: [
					"GET /OptionSets('{OptionSetId}')/Versions('{VersionsId}')",
				],
			},
		},
	},
];
