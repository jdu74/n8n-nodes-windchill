import { INodeProperties } from "n8n-workflow";

export const PtcVisualizationRepresentationFunctionGetDynamicStructureRepresentationDescription: INodeProperties[] = [
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
					"GET /Representations('{RepresentationId}')/PTC.Visualization.GetDynamicStructureRepresentation()",
				],
			},
		},
		required: true,
	},
];
