import { INodeProperties } from "n8n-workflow";

export const PartAttachmentsGetContentItemDescription: INodeProperties[] = [
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
					'Part.Attachments.GetContentItem',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
				value: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: "GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ContentItemId',
		name: 'ContentItemId-string(path)',
		description: 'Content Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.GetContentItem',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
];
