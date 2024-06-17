import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtMaterialFunctionGetDynamicStructureRepresentationWithDescription: INodeProperties[] = [
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
					"GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'NavigationCriteriaId',
		name: 'NavigationCriteriaId-string(path)',
		description: 'Navigation Criteria ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Materials('{MaterialId}')/PTC.MfgProcMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
