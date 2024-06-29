import { INodeProperties } from "n8n-workflow";

export const GetLicenseGroupDescription: INodeProperties[] = [
	{
		displayName: 'LicenseGroupId',
		name: 'LicenseGroupId-string(path)',
		description: 'License Group ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.PrincipalMgmt',
				],
				operation: [
					"GET /LicenseGroups('{LicenseGroupId}')",
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
					'PTC.PrincipalMgmt',
				],
				operation: [
					"GET /LicenseGroups('{LicenseGroupId}')",
				],
			},
		},
	},
];
