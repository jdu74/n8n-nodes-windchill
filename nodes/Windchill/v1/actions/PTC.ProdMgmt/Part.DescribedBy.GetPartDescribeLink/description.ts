import { INodeProperties } from "n8n-workflow";

export const PartDescribedByGetPartDescribeLinkDescription: INodeProperties[] = [
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
				value: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
				action: "GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
				description: "Get PartDescribeLink for a given PartDescribeLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDescribeLinkId',
		name: 'PartDescribeLinkId-string(path)',
		description: 'Part Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDescribeLinkId',
		name: 'PartDescribeLinkId-string(path)',
		description: 'Part Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDescribeLinkId',
		name: 'PartDescribeLinkId-string(path)',
		description: 'Part Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDescribeLinkId',
		name: 'PartDescribeLinkId-string(path)',
		description: 'Part Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDescribeLinkId',
		name: 'PartDescribeLinkId-string(path)',
		description: 'Part Describe Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
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
					'Part.DescribedBy.GetPartDescribeLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DescribedBy('{PartDescribeLinkId}')",
				],
			},
		},
	},
];
