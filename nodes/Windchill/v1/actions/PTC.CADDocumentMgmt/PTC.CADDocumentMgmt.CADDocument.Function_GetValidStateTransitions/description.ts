import { INodeProperties } from "n8n-workflow";

export const PtcCadDocumentMgmtCadDocumentFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
	{
		displayName: 'CADDocumentId',
		name: 'CADDocumentId-string(path)',
		description: 'Cad Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					"GET /CADDocuments('{CADDocumentId}')/PTC.CADDocumentMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
