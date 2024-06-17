import { INodeProperties } from "n8n-workflow";

export const StandardControlCharacteristicSccdrLinksDeletePtcFactorySccReferenceDocumentDescription: INodeProperties[] = [
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
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SCCReferenceDocumentId',
		name: 'SCCReferenceDocumentId-string(path)',
		description: 'Scc Reference Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /StandardControlCharacteristics('{StandardControlCharacteristicId}')/SCCDRLinks('{SCCReferenceDocumentId}')",
				],
			},
		},
		required: true,
	},
];
