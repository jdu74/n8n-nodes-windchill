import { INodeProperties } from "n8n-workflow";

export const UpdateProblemReportDescription: INodeProperties[] = [
	{
		displayName: 'ProblemReportId',
		name: 'ProblemReportId-string(path)',
		description: 'Problem Report ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')",
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
					"PATCH /ProblemReports('{ProblemReportId}')",
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
					"PATCH /ProblemReports('{ProblemReportId}')",
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
				displayName: 'CIAffectLinks@odata.bind',
				name: 'CIAffectLinks@odata.bind',
				description: 'Ci Affect Links Odata Bind - array',
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
				displayName: 'Folder@odata.bind',
				name: 'Folder@odata.bind',
				description: 'Folder Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'IssuePriority',
				name: 'IssuePriority',
				description: 'Issue Priority - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
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
				displayName: 'Requester',
				name: 'Requester',
				description: 'Requester - string',
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
					"PATCH /ProblemReports('{ProblemReportId}')",
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
		default: '{\n\t"Requester": "string",\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"NeedDate": "string",\n\t"IssuePriority": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"Description": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"CIAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')",
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
