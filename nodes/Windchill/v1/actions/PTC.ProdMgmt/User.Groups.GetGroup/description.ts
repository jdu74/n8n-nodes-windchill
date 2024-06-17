import { INodeProperties } from "n8n-workflow";

export const UserGroupsGetGroupDescription: INodeProperties[] = [
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
					'User.Groups.GetGroup',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
				value: "GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
				description: "Get Group for a given GroupId - get /Parts('{PartId}')/Creator/Groups('{GroupId}')",
				action: "GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
				value: "GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
				description: "Get Group for a given GroupId - get /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
				action: "GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
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
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'GroupId',
		name: 'GroupId-string(path)',
		description: 'Group ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
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
					'PTC.ProdMgmt',
				],
				operation: [
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Creator/Groups('{GroupId}')",
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
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'GroupId',
		name: 'GroupId-string(path)',
		description: 'Group ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
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
					'PTC.ProdMgmt',
				],
				operation: [
					'User.Groups.GetGroup',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier/Groups('{GroupId}')",
				],
			},
		},
	},
];
