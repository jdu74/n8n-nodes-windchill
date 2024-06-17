import { INodeProperties } from "n8n-workflow";

export const PartAttachmentsPostContentItemDescription: INodeProperties[] = [
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
					'Part.Attachments.PostContentItem',
				],
			},
		},
		default: "POST /Parts('{PartId}')/Attachments",
		options: [
			{
				name: "POST /Parts('{PartId}')/Attachments",
				value: "POST /Parts('{PartId}')/Attachments",
				description: "Create ContentItem - post /Parts('{PartId}')/Attachments",
				action: "POST /Parts('{PartId}')/Attachments",
			},
			{
				name: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
				value: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
				description: "Create ContentItem - post /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
				action: "POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
			},
			{
				name: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
				value: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
				description: "Create ContentItem - post /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
				action: "POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
			},
			{
				name: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
				value: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
				description: "Create ContentItem - post /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
				action: "POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
			},
			{
				name: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
				value: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
				description: "Create ContentItem - post /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
				action: "POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Attachments",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Attachments",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Category": "string",\n\t"Description": "string",\n\t"Comments": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Category": "string",\n\t"Description": "string",\n\t"Comments": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Category": "string",\n\t"Description": "string",\n\t"Comments": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Category": "string",\n\t"Description": "string",\n\t"Comments": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
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
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"Category": "string",\n\t"Description": "string",\n\t"Comments": "string",\n\t"@odata.type": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Attachments.PostContentItem',
				],
				path: [
					"POST /Parts('{PartId}')/Versions('{VersionsId}')/Attachments",
				],
			},
		},
	},
];
