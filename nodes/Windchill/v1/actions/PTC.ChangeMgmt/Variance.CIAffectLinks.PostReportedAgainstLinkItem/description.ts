import { INodeProperties } from "n8n-workflow";

export const VarianceCiAffectLinksPostReportedAgainstLinkItemDescription: INodeProperties[] = [
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
					"POST /Variances('{VarianceId}')/CIAffectLinks",
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
					"POST /Variances('{VarianceId}')/CIAffectLinks",
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
					"POST /Variances('{VarianceId}')/CIAffectLinks",
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
				displayName: 'ApprovedQuantity',
				name: 'ApprovedQuantity',
				description: 'Approved Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Changeable@odata.bind',
				name: 'Changeable@odata.bind',
				description: 'Changeable Odata Bind - string',
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
					"POST /Variances('{VarianceId}')/CIAffectLinks",
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
		default: '{\n\t"ApprovedQuantity": 0,\n\t"Description": "string",\n\t"@odata.type": "string",\n\t"Changeable@odata.bind": "string",\n\t"AffectedObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /Variances('{VarianceId}')/CIAffectLinks",
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
