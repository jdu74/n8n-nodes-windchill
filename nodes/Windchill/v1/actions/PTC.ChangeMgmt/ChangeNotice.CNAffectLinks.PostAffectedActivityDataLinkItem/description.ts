import { INodeProperties } from "n8n-workflow";

export const ChangeNoticeCnAffectLinksPostAffectedActivityDataLinkItemDescription: INodeProperties[] = [
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
					"POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
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
					"POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
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
					"POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
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
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'AffectedObjects@odata.bind',
				name: 'AffectedObjects@odata.bind',
				description: 'Affected Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Changeable@odata.bind',
				name: 'Changeable@odata.bind',
				description: 'Changeable Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ChangeIntent',
				name: 'ChangeIntent',
				description: 'Change Intent - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DispositionComments',
				name: 'DispositionComments',
				description: 'Disposition Comments - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'FinishedDisposition',
				name: 'FinishedDisposition',
				description: 'Finished Disposition - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'InventoryDisposition',
				name: 'InventoryDisposition',
				description: 'Inventory Disposition - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'OnOrderDisposition',
				name: 'OnOrderDisposition',
				description: 'On Order Disposition - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
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
		default: '{\n\t"ChangeIntent": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"DispositionComments": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"InventoryDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FinishedDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"OnOrderDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"@odata.type": "string",\n\t"Changeable@odata.bind": "string",\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
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
