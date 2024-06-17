import { INodeProperties } from "n8n-workflow";

export const PartAlternatesGetPartAlternateLinkDescription: INodeProperties[] = [
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
					'Part.Alternates.GetPartAlternateLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
				value: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
				action: "GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
				description: "Get PartAlternateLink for a given PartAlternateLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartAlternateLinkId',
		name: 'PartAlternateLinkId-string(path)',
		description: 'Part Alternate Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartAlternateLinkId',
		name: 'PartAlternateLinkId-string(path)',
		description: 'Part Alternate Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartAlternateLinkId',
		name: 'PartAlternateLinkId-string(path)',
		description: 'Part Alternate Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartAlternateLinkId',
		name: 'PartAlternateLinkId-string(path)',
		description: 'Part Alternate Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartAlternateLinkId',
		name: 'PartAlternateLinkId-string(path)',
		description: 'Part Alternate Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
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
					'Part.Alternates.GetPartAlternateLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Alternates('{PartAlternateLinkId}')",
				],
			},
		},
	},
];
