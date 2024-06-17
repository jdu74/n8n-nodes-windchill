import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccddLinksDeletePtcFactorySccDescribedByDocumentDescription: INodeProperties[] = [
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
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SCCDescribedByDocumentId',
		name: 'SCCDescribedByDocumentId-string(path)',
		description: 'Scc Described By Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDDLinks('{SCCDescribedByDocumentId}')",
				],
			},
		},
		required: true,
	},
];
