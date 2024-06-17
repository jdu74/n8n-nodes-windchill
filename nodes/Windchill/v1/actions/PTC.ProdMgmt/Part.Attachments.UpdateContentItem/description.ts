import { INodeProperties } from "n8n-workflow";

export const PartAttachmentsUpdateContentItemDescription: INodeProperties[] = [
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
					'Part.Attachments.UpdateContentItem',
				],
			},
		},
		default: "PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
		options: [
			{
				name: "PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				value: "PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: "PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				value: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				action: "PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				value: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				action: "PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				value: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				action: "PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
			},
			{
				name: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				value: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				action: "PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Comments',
				name: 'Comments',
				description: 'Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Description": "string",\n\t"Comments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Comments',
				name: 'Comments',
				description: 'Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Description": "string",\n\t"Comments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Comments',
				name: 'Comments',
				description: 'Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Description": "string",\n\t"Comments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Comments',
				name: 'Comments',
				description: 'Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Description": "string",\n\t"Comments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Comments',
				name: 'Comments',
				description: 'Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Description": "string",\n\t"Comments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.UpdateContentItem',
				],
				path: [
					"PATCH /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
	},
];
