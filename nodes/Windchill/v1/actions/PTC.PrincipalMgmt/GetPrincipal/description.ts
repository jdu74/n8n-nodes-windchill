import { INodeProperties } from "n8n-workflow";

export const GetPrincipalDescription: INodeProperties[] = [
	{
		displayName: 'PrincipalId',
		name: 'PrincipalId-string(path)',
		description: 'Principal ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.PrincipalMgmt',
				],
				operation: [
					"GET /Principals('{PrincipalId}')",
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
					"GET /Principals('{PrincipalId}')",
				],
			},
		},
	},
];
