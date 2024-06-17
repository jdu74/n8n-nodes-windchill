import { INodeProperties } from "n8n-workflow";

export const ChangeNoticeAttachmentsUpdateContentItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeNoticeId',
		name: 'ChangeNoticeId-string(path)',
		description: 'Change Notice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				],
				jsonContentType: [
					'application/json',
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
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
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
