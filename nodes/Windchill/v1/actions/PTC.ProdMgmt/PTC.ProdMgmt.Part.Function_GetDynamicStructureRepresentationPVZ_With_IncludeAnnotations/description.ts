import { INodeProperties } from "n8n-workflow";

export const PtcProdMgmtPartFunctionGetDynamicStructureRepresentationPvzWithIncludeAnnotationsDescription: INodeProperties[] = [
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
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
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
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
					'PTC.ProdMgmt',
				],
				operation: [
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentationPVZ(NavigationCriteriaId='{NavigationCriteriaId}',IncludeAnnotations={IncludeAnnotations})",
				],
			},
		},
		required: true,
	},
];
