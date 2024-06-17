import { INodeProperties } from "n8n-workflow";

export const PtcProdMgmtPartFunctionGetDynamicStructureRepresentationWithDescription: INodeProperties[] = [
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
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
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
					"GET /Parts('{PartId}')/PTC.ProdMgmt.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
