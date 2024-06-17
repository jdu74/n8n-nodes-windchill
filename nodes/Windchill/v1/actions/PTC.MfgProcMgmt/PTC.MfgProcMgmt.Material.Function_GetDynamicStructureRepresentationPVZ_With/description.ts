import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationPvzWithDescription: INodeProperties[] = [
	{
		displayName: 'MaterialId',
		name: 'MaterialId-string(path)',
		description: 'Material ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentationPVZ(IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
];
