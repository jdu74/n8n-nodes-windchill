import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccResourceLinksDeletePtcFactorySccResourceUsageDescription: INodeProperties[] = [
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
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SCCResourceUsageId',
		name: 'SCCResourceUsageId-string(path)',
		description: 'Scc Resource Usage ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCResourceLinks('{SCCResourceUsageId}')",
				],
			},
		},
		required: true,
	},
];
