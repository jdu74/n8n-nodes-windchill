import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccspLinksGetSccStandardProcedureUsageDescription: INodeProperties[] = [
	{
		displayName: 'StandardControlCharacteristicId',
		name: 'StandardControlCharacteristicId-string(path)',
		description: 'Standard Control Characteristic ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SCCStandardProcedureUsageId',
		name: 'SCCStandardProcedureUsageId-string(path)',
		description: 'Scc Standard Procedure Usage ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				],
			},
		},
		required: true,
	},
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
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				],
			},
		},
	},
];
