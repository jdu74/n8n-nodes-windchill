import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccspLinksDeletePtcFactorySccStandardProcedureUsageDescription: INodeProperties[] = [
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
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
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
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCSPLinks('{SCCStandardProcedureUsageId}')",
				],
			},
		},
		required: true,
	},
];
