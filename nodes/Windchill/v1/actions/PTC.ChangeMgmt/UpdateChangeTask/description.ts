import { INodeProperties } from "n8n-workflow";

export const UpdateChangeTaskDescription: INodeProperties[] = [
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
					"PATCH /ChangeTasks('{ChangeTaskId}')",
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
					"PATCH /ChangeTasks('{ChangeTaskId}')",
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
					"PATCH /ChangeTasks('{ChangeTaskId}')",
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
				displayName: 'AffectedObjects@odata.bind',
				name: 'AffectedObjects@odata.bind',
				description: 'Affected Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Assignee@odata.bind',
				name: 'Assignee@odata.bind',
				description: 'Assignee Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Attachments@odata.bind',
				name: 'Attachments@odata.bind',
				description: 'Attachments Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ChangeNotice@odata.bind',
				name: 'ChangeNotice@odata.bind',
				description: 'Change Notice Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CNAffectLinks@odata.bind',
				name: 'CNAffectLinks@odata.bind',
				description: 'Cn Affect Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Context@odata.bind',
				name: 'Context@odata.bind',
				description: 'Context Odata Bind - string',
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
			{
				displayName: 'DescriptionSummary',
				name: 'DescriptionSummary',
				description: 'Description Summary - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'Name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'NeedDate',
				name: 'NeedDate',
				description: 'Need Date - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'Number',
				description: 'Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ResultingLinks@odata.bind',
				name: 'ResultingLinks@odata.bind',
				description: 'Resulting Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ResultingObjects@odata.bind',
				name: 'ResultingObjects@odata.bind',
				description: 'Resulting Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Reviewer@odata.bind',
				name: 'Reviewer@odata.bind',
				description: 'Reviewer Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Sequence',
				name: 'Sequence',
				description: 'Sequence - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UnincorporatedLinks@odata.bind',
				name: 'UnincorporatedLinks@odata.bind',
				description: 'Unincorporated Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeTasks('{ChangeTaskId}')",
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
		default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"NeedDate": "string",\n\t"Number": "string",\n\t"Sequence": "string",\n\t"Description": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"ChangeNotice@odata.bind": "string",\n\t"Assignee@odata.bind": [\n\t\t"string"\n\t],\n\t"Reviewer@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"ResultingObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"CNAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"UnincorporatedLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeTasks('{ChangeTaskId}')",
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
