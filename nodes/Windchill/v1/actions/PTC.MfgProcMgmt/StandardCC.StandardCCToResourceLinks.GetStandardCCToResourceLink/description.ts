import { INodeProperties } from "n8n-workflow";

export const StandardCcStandardCcToResourceLinksGetStandardCcToResourceLinkDescription: INodeProperties[] = [
	{
		displayName: 'StandardCCId',
		name: 'StandardCCId-string(path)',
		description: 'Standard Cc ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks('{StandardCCToResourceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'StandardCCToResourceLinkId',
		name: 'StandardCCToResourceLinkId-string(path)',
		description: 'Standard Cc To Resource Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks('{StandardCCToResourceLinkId}')",
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
					"GET /StandardCCs('{StandardCCId}')/StandardCCToResourceLinks('{StandardCCToResourceLinkId}')",
				],
			},
		},
	},
];
