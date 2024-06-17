import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationDescription: INodeProperties[] = [
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
					"GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation()",
				],
			},
		},
		required: true,
	},
];
