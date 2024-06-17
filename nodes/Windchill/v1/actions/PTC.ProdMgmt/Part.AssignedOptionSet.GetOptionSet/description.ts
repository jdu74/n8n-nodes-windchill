import { INodeProperties } from "n8n-workflow";

export const PartAssignedOptionSetGetOptionSetDescription: INodeProperties[] = [
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
			},
		},
		default: "GET /Parts('{PartId}')/AssignedOptionSet",
		options: [
			{
				name: "GET /Parts('{PartId}')/AssignedOptionSet",
				value: "GET /Parts('{PartId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Parts('{PartId}')/AssignedOptionSet",
				action: "GET /Parts('{PartId}')/AssignedOptionSet",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
				description: "Get OptionSet - get /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
				description: "Get OptionSet - get /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartMadeFromId',
		name: 'PartMadeFromId-string(path)',
		description: 'Part Made From ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RevisionsId',
		name: 'RevisionsId-string(path)',
		description: 'Revisions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UsedById',
		name: 'UsedById-string(path)',
		description: 'Used By ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
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
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
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
					'Part.AssignedOptionSet.GetOptionSet',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/AssignedOptionSet",
				],
			},
		},
	},
];
