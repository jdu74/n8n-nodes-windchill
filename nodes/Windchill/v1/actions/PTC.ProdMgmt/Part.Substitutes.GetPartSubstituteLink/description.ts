import { INodeProperties } from "n8n-workflow";

export const PartSubstitutesGetPartSubstituteLinkDescription: INodeProperties[] = [
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
				value: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
				action: "GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
				description: "Get PartSubstituteLink for a given PartSubstituteLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartSubstituteLinkId',
		name: 'PartSubstituteLinkId-string(path)',
		description: 'Part Substitute Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartSubstituteLinkId',
		name: 'PartSubstituteLinkId-string(path)',
		description: 'Part Substitute Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartSubstituteLinkId',
		name: 'PartSubstituteLinkId-string(path)',
		description: 'Part Substitute Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartSubstituteLinkId',
		name: 'PartSubstituteLinkId-string(path)',
		description: 'Part Substitute Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartSubstituteLinkId',
		name: 'PartSubstituteLinkId-string(path)',
		description: 'Part Substitute Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
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
					'Part.Substitutes.GetPartSubstituteLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Substitutes('{PartSubstituteLinkId}')",
				],
			},
		},
	},
];
