import { INodeProperties } from "n8n-workflow";

export const PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentationWithDescription: INodeProperties[] = [
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Visualization',
				],
				operation: [
					"GET /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
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
					'PTC.Visualization',
				],
				operation: [
					"GET /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation(NavigationCriteriaId='{NavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
