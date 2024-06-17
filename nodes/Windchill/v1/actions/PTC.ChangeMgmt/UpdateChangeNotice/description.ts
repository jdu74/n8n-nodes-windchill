import { INodeProperties } from "n8n-workflow";

export const UpdateChangeNoticeDescription: INodeProperties[] = [
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
					"PATCH /ChangeNotices('{ChangeNoticeId}')",
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
					"PATCH /ChangeNotices('{ChangeNoticeId}')",
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
					"PATCH /ChangeNotices('{ChangeNoticeId}')",
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
				displayName: 'ActualStartDate',
				name: 'ActualStartDate',
				description: 'Actual Start Date - string',
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
				displayName: 'ChangeAdminII',
				name: 'ChangeAdminII',
				description: 'Change Admin Ii - array',
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
				displayName: 'ChangeAdministratorII@odata.bind',
				name: 'ChangeAdministratorII@odata.bind',
				description: 'Change Administrator Ii Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ChangeNoticeComplexity',
				name: 'ChangeNoticeComplexity',
				description: 'Change Notice Complexity - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
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
				displayName: 'EstimatedStartDate',
				name: 'EstimatedStartDate',
				description: 'Estimated Start Date - string',
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
				displayName: 'ImplementationPlan@odata.bind',
				name: 'ImplementationPlan@odata.bind',
				description: 'Implementation Plan Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
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
					"PATCH /ChangeNotices('{ChangeNoticeId}')",
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
		default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ChangeAdminI": [\n\t\t{\n\t\t\t"PrincipalID": "string",\n\t\t\t"DisplayName": "string"\n\t\t}\n\t],\n\t"ChangeAdminII": [\n\t\t{\n\t\t\t"PrincipalID": "string",\n\t\t\t"DisplayName": "string"\n\t\t}\n\t],\n\t"NeedDate": "string",\n\t"ActualStartDate": "string",\n\t"ChangeNoticeComplexity": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"EstimatedStartDate": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"ChangeAdministratorI@odata.bind": [\n\t\t"string"\n\t],\n\t"ChangeAdministratorII@odata.bind": [\n\t\t"string"\n\t],\n\t"ImplementationPlan@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"CNAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"UnincorporatedLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ChangeNotices('{ChangeNoticeId}')",
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
