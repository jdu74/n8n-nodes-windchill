import { INodeProperties } from "n8n-workflow";

export const UserLicenseGroupsGetLicenseGroupDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				value: "GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				description: "Get LicenseGroup for a given LicenseGroupId - get /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				action: "GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
				value: "GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
				description: "Get LicenseGroup for a given LicenseGroupId - get /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
				action: "GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
			},
		],
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'LicenseGroupId',
		name: 'LicenseGroupId-string(path)',
		description: 'License Group ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
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
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/LicenseGroups('{LicenseGroupId}')",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'LicenseGroupId',
		name: 'LicenseGroupId-string(path)',
		description: 'License Group ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
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
					'PTC.ProdMgmt',
				],
				operation: [
					'User.LicenseGroups.GetLicenseGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/LicenseGroups('{LicenseGroupId}')",
				],
			},
		},
	},
];
