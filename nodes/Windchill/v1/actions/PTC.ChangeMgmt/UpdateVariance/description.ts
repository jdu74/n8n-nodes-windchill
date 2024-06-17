import { INodeProperties } from "n8n-workflow";

export const UpdateVarianceDescription: INodeProperties[] = [
	{
		displayName: 'VarianceId',
		name: 'VarianceId-string(path)',
		description: 'Variance ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Variances('{VarianceId}')",
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
					"PATCH /Variances('{VarianceId}')",
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
					"PATCH /Variances('{VarianceId}')",
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
				displayName: 'ApprovedQuantity',
				name: 'ApprovedQuantity',
				description: 'Approved Quantity - number',
				type: 'number',
				default: 0,
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
				displayName: 'CorrectiveAction',
				name: 'CorrectiveAction',
				description: 'Corrective Action - string',
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
				displayName: 'EffectOnCost',
				name: 'EffectOnCost',
				description: 'Effect On Cost - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'EffectOnSchedule',
				name: 'EffectOnSchedule',
				description: 'Effect On Schedule - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'EffectOnSupport',
				name: 'EffectOnSupport',
				description: 'Effect On Support - string',
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
				displayName: 'Number',
				name: 'Number',
				description: 'Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Reason',
				name: 'Reason',
				description: 'Reason - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ReasonSummary',
				name: 'ReasonSummary',
				description: 'Reason Summary - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Recurring',
				name: 'Recurring',
				description: 'Whether Recurring - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'VarianceCategory',
				name: 'VarianceCategory',
				description: 'Variance Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'VarianceOwners@odata.bind',
				name: 'VarianceOwners@odata.bind',
				description: 'Variance Owners Odata Bind - string',
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
					"PATCH /Variances('{VarianceId}')",
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
		default: '{\n\t"EffectOnCost": "string",\n\t"EffectOnSupport": "string",\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"CorrectiveAction": "string",\n\t"Recurring": true,\n\t"NeedDate": "string",\n\t"ReasonSummary": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"VarianceCategory": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Reason": "string",\n\t"Name": "string",\n\t"DescriptionSummary": "string",\n\t"ApprovedQuantity": 0,\n\t"EffectOnSchedule": "string",\n\t"VarianceOwners@odata.bind": "string",\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t],\n\t"CIAffectLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /Variances('{VarianceId}')",
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
