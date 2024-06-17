import { INodeProperties } from "n8n-workflow";

export const PartAttachmentsDeletePtcContentItemDescription: INodeProperties[] = [
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
			},
		},
		default: "DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
		options: [
			{
				name: "DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
				value: "DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/Attachments('{ContentItemId}')",
				action: "DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				value: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				action: "DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				value: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				action: "DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				value: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				action: "DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
			},
			{
				name: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				value: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				action: "DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Revisions('{RevisionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/UsedBy('{UsedById}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
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
					'Part.Attachments.DeletePTC.ContentItem',
				],
				path: [
					"DELETE /Parts('{PartId}')/Versions('{VersionsId}')/Attachments('{ContentItemId}')",
				],
			},
		},
		required: true,
	},
];
