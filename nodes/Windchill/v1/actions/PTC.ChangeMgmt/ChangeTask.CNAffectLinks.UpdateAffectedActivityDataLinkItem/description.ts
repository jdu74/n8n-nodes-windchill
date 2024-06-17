import { INodeProperties } from "n8n-workflow";

export const ChangeTaskCnAffectLinksUpdateAffectedActivityDataLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeTaskId',
		name: 'ChangeTaskId-string(path)',
		description: 'Change Task ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AffectedActivityDataLinkItemId',
		name: 'AffectedActivityDataLinkItemId-string(path)',
		description: 'Affected Activity Data Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
		default: '{\n\t"ChangeIntent": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"DispositionComments": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"InventoryDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FinishedDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"OnOrderDisposition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
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
