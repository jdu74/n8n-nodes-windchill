import { INodeProperties } from "n8n-workflow";

export const PostChangeRequestDescription: INodeProperties[] = [
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
					'POST /ChangeRequests',
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
					'POST /ChangeRequests',
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
				displayName: 'ChangeAdminI',
				name: 'ChangeAdminI',
				description: 'Change Admin I - array',
				type: 'json',
				default: '[\n\t{\n\t\t"PrincipalID": "string",\n\t\t"DisplayName": "string"\n\t}\n]',
			},
			{
				displayName: 'ChangeAdministratorI@odata.bind',
				name: 'ChangeAdministratorI@odata.bind',
				description: 'Change Administrator I Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Complexity',
				name: 'Complexity',
				description: 'Complexity - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Context@odata.bind',
				name: 'Context@odata.bind',
				description: 'Context Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CRAffectLinks@odata.bind',
				name: 'CRAffectLinks@odata.bind',
				description: 'Cr Affect Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
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
				displayName: 'NonRecurringCost',
				name: 'NonRecurringCost',
				description: 'Non Recurring Cost - string',
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
				displayName: 'ProposedSolution',
				name: 'ProposedSolution',
				description: 'Proposed Solution - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ProposedSolutionSummary',
				name: 'ProposedSolutionSummary',
				description: 'Proposed Solution Summary - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'RecurringCost',
				name: 'RecurringCost',
				description: 'Recurring Cost - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'RequestPriority',
				name: 'RequestPriority',
				description: 'Request Priority - object',
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
					'POST /ChangeRequests',
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
		default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ProposedSolution": "string",\n\t"ProposedSolutionSummary": "string",\n\t"ChangeAdminI": [\n\t\t{\n\t\t\t"PrincipalID": "string",\n\t\t\t"DisplayName": "string"\n\t\t}\n\t],\n\t"NeedDate": "string",\n\t"Complexity": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"RecurringCost": "string",\n\t"RequestPriority": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"Description": "string",\n\t"NonRecurringCost": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"@odata.type": "string",\n\t"ChangeAdministratorI@odata.bind": [\n\t\t"string"\n\t],\n\t"CRAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /ChangeRequests',
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
