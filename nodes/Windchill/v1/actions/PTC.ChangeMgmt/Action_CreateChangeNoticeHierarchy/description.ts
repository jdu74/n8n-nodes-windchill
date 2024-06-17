import { INodeProperties } from "n8n-workflow";

export const ActionCreateChangeNoticeHierarchyDescription: INodeProperties[] = [
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /CreateChangeNoticeHierarchy',
				],
			},
		},
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
					'POST /CreateChangeNoticeHierarchy',
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
					'POST /CreateChangeNoticeHierarchy',
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
				displayName: 'ChangeNotice',
				name: 'ChangeNotice',
				description: 'Change Notice - object',
				type: 'json',
				default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ChangeAdminI": [\n\t\t{\n\t\t\t"PrincipalID": "string",\n\t\t\t"DisplayName": "string"\n\t\t}\n\t],\n\t"ChangeAdminII": [\n\t\t{\n\t\t\t"PrincipalID": "string",\n\t\t\t"DisplayName": "string"\n\t\t}\n\t],\n\t"NeedDate": "string",\n\t"ActualStartDate": "string",\n\t"ChangeNoticeComplexity": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"EstimatedStartDate": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"@odata.type": "string",\n\t"ChangeAdministratorI@odata.bind": [\n\t\t"string"\n\t],\n\t"ChangeAdministratorII@odata.bind": [\n\t\t"string"\n\t],\n\t"ImplementationPlan@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"CNAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"UnincorporatedLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
			},
			{
				displayName: 'ChangeTask',
				name: 'ChangeTask',
				description: 'Change Task - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"NeedDate": "string",\n\t\t"Number": "string",\n\t\t"Sequence": "string",\n\t\t"Description": "string",\n\t\t"Name": "string",\n\t\t"DescriptionSummary": "string",\n\t\t"@odata.type": "string",\n\t\t"ChangeNotice@odata.bind": "string",\n\t\t"Assignee@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Reviewer@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Context@odata.bind": "string",\n\t\t"ResultingObjects@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"CNAffectLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"ResultingLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Attachments@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"UnincorporatedLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"AffectedObjects@odata.bind": [\n\t\t\t"string"\n\t\t]\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /CreateChangeNoticeHierarchy',
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
		default: '{\n\t"ChangeTask": [\n\t\t{\n\t\t\t"Category": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"NeedDate": "string",\n\t\t\t"Number": "string",\n\t\t\t"Sequence": "string",\n\t\t\t"Description": "string",\n\t\t\t"Name": "string",\n\t\t\t"DescriptionSummary": "string",\n\t\t\t"@odata.type": "string",\n\t\t\t"ChangeNotice@odata.bind": "string",\n\t\t\t"Assignee@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Reviewer@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Context@odata.bind": "string",\n\t\t\t"ResultingObjects@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"CNAffectLinks@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"ResultingLinks@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Attachments@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"UnincorporatedLinks@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"AffectedObjects@odata.bind": [\n\t\t\t\t"string"\n\t\t\t]\n\t\t}\n\t],\n\t"ChangeNotice": {\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ChangeAdminI": [\n\t\t\t{\n\t\t\t\t"PrincipalID": "string",\n\t\t\t\t"DisplayName": "string"\n\t\t\t}\n\t\t],\n\t\t"ChangeAdminII": [\n\t\t\t{\n\t\t\t\t"PrincipalID": "string",\n\t\t\t\t"DisplayName": "string"\n\t\t\t}\n\t\t],\n\t\t"NeedDate": "string",\n\t\t"ActualStartDate": "string",\n\t\t"ChangeNoticeComplexity": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"EstimatedStartDate": "string",\n\t\t"Number": "string",\n\t\t"Description": "string",\n\t\t"Name": "string",\n\t\t"DescriptionSummary": "string",\n\t\t"@odata.type": "string",\n\t\t"ChangeAdministratorI@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"ChangeAdministratorII@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"ImplementationPlan@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Context@odata.bind": "string",\n\t\t"Folder@odata.bind": "string",\n\t\t"Attachments@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"ResultingObjects@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"CNAffectLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"ResultingLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"UnincorporatedLinks@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"AffectedObjects@odata.bind": [\n\t\t\t"string"\n\t\t]\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					'POST /CreateChangeNoticeHierarchy',
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
