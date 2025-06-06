import { INodeProperties } from "n8n-workflow";

export const PtcCadDocumentMgmtCadDocumentFunctionGetDynamicStructureRepresentationPvzWithDescription: INodeProperties[] = [
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
					"GET /CADDocuments('{CADDocumentId}')/PTC.CADDocumentMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'IncludeAnnotations',
		name: 'IncludeAnnotations-boolean(path)',
		description: 'Whether Include Annotations - boolean (path)',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					"GET /CADDocuments('{CADDocumentId}')/PTC.CADDocumentMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
];
